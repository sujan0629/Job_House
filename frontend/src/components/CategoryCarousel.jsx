import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
    "Frontend Developer", "Backend Developer", "Data Science", "Graphic Designer",
    "FullStack Developer", "UI/UX Designer", "Mobile App Developer", "Web Developer",
    "DevOps Engineer", "Software Engineer", "Machine Learning Engineer", "Product Manager",
    "QA Engineer", "Cloud Engineer", "Systems Administrator", "Network Engineer", "Security Analyst",
    "Blockchain Developer", "Data Analyst", "Digital Marketing Specialist", "Content Writer",
    "SEO Specialist", "Game Developer", "Database Administrator", "Business Analyst", "UI Developer",
    "Game Designer", "Cloud Solutions Architect", "Technical Support Specialist", "Project Manager",
    "Web Designer", "Automation Engineer", "Enterprise Architect", "Salesforce Developer", "SAP Consultant",
    "Embedded Systems Engineer", "Java Developer", "PHP Developer", "Ruby Developer", "C++ Developer",
    "Python Developer", "Android Developer", "iOS Developer",
    
    // Non-tech related categories:
    "Marketing Manager", "Sales Manager", "Financial Analyst", "Human Resources Manager", "Operations Manager",
    "Customer Service Representative", "Accountant", "Lawyer", "Teacher", "Nurse", "Doctor", "Pharmacist",
    "Project Coordinator", "Real Estate Agent", "Public Relations Specialist", "Event Planner", "Supply Chain Manager",
    "Social Media Manager", "Research Scientist", "Business Development Manager", "Healthcare Administrator",
    "Executive Assistant", "Copywriter", "Journalist", "Photographer", "Chef", "Fashion Designer", "Interior Designer",
    "Logistics Coordinator", "Consultant", "Recruiter", "Construction Manager", "Environmental Scientist", "Product Designer",
    "Art Director", "Translator", "Translator/Interpreter", "Operations Research Analyst", "Veterinarian", "Therapist",
    "Fitness Trainer", "Dietitian", "Artist"
];

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className="relative">
            <Carousel className="w-full max-w-xl mx-auto my-20">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 sm:basis-1/2">
                                <Button onClick={() => searchJobHandler(cat)} variant="outline" className="rounded-full w-full">{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                
                {/* Previous Button */}
                <CarouselPrevious 
                    className="absolute left-4 top-1/8 transform -translate-y-1/8 z-10 sm:left-8 md:left-16 lg:left-16" 
                />
                
                {/* Next Button */}
                <CarouselNext 
                    className="absolute right-4 top-1/8 transform -translate-y-1/8 z-10 sm:right-8 md:right-16 lg:right-16" 
                />
            </Carousel>
        </div>
    );
}

export default CategoryCarousel;
