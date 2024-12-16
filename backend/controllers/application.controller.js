import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";


const handleError = (res, message, statusCode = 400) => {
    return res.status(statusCode).json({
        message,
        success: false
    });
};

export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;

        if (!userId || !jobId) {
            return handleError(res, "User ID and Job ID are required.", 400);
        }


        const existingApplication = await Application.findOne({ job: jobId, applicant: userId });
        if (existingApplication) {
            return handleError(res, "You have already applied for this job.", 400);
        }


        const job = await Job.findById(jobId);
        if (!job) {
            return handleError(res, "Job not found.", 404);
        }


        const newApplication = await Application.create({
            job: jobId,
            applicant: userId,
        });

        job.applications.push(newApplication._id);
        await job.save();

        return res.status(201).json({
            message: "Job applied successfully.",
            success: true
        });
    } catch (error) {
        console.error(error);
        return handleError(res, "Something went wrong.", 500);
    }
};

export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id;
        if (!userId) {
            return handleError(res, "User ID is required.", 400);
        }

        const applications = await Application.find({ applicant: userId })
            .sort({ createdAt: -1 })
            .populate({
                path: 'job',
                options: { sort: { createdAt: -1 } },
                populate: {
                    path: 'company',
                    options: { sort: { createdAt: -1 } },
                }
            });

        if (!applications.length) {
            return handleError(res, "No Applications found.", 404);
        }

        return res.status(200).json({
            applications,
            success: true
        });
    } catch (error) {
        console.error(error);
        return handleError(res, "Something went wrong.", 500);
    }
};

export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;

        const job = await Job.findById(jobId).populate({
            path: 'applications',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'applicant'
            }
        });

        if (!job) {
            return handleError(res, "Job not found.", 404);
        }

        return res.status(200).json({
            job,
            success: true
        });
    } catch (error) {
        console.error(error);
        return handleError(res, "Something went wrong.", 500);
    }
};

export const updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const applicationId = req.params.id;

        if (!status) {
            return handleError(res, "Status is required.", 400);
        }

        const application = await Application.findById(applicationId);
        if (!application) {
            return handleError(res, "Application not found.", 404);
        }

        application.status = status.toLowerCase();
        await application.save();

        return res.status(200).json({
            message: "Status updated successfully.",
            success: true
        });
    } catch (error) {
        console.error(error);
        return handleError(res, "Something went wrong.", 500);
    }
};
