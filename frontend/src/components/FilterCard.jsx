import React, { useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';

const filterData = [
    {
        filterType: "Location",
        array: [
            "Kathmandu", "Dhangadhi", "Pokhara", "Attariya", "Dhulikhel", 
            "Biratnagar", "Lalitpur", "Chitwan", "Janakpur", "Hetauda",
            "Butwal", "Bharatpur", "Birtamode", "Rajbiraj", "Baglung"
        ]
    },
    {
        filterType: "Industry",
        array: [
            "Frontend Developer", "Backend Developer", "FullStack Developer", 
            "Data Science", "Graphic Designer", "UI/UX Designer", "Mobile App Developer",
            "Web Developer", "DevOps Engineer", "Software Engineer", "Machine Learning Engineer",
            "Product Manager", "QA Engineer", "Cloud Engineer", "Systems Administrator", 
            "Network Engineer", "Security Analyst", "Blockchain Developer", "Data Analyst", 
            "Digital Marketing Specialist", "Content Writer", "SEO Specialist", "Game Developer", 
            "Database Administrator", "Business Analyst", "UI Developer", "Game Designer", 
            "Cloud Solutions Architect", "Technical Support Specialist", "Project Manager", 
            "Web Designer", "Automation Engineer", "Enterprise Architect", "Salesforce Developer", 
            "SAP Consultant", "Embedded Systems Engineer", "Java Developer", "PHP Developer", 
            "Ruby Developer", "C++ Developer", "Python Developer", "Android Developer", 
            "iOS Developer", "Marketing Manager", "Sales Manager", "Financial Analyst"
        ]
    },
    {
        filterType: "Salary",
        array: [
            "0-20k", "20k-40k", "42k-1lakh", "1lakh to 5lakh", "5lakh to 10lakh", 
            "10lakh to 15lakh", "15lakh to 20lakh", "20lakh and above"
        ]
    },
    {
        filterType: "Job Type",
        array: ["Full-Time", "Part-Time", "Freelance", "Contract"]
    },
    {
        filterType: "Experience Level",
        array: ["Entry Level", "Mid Level", "Senior Level"]
    },
    {
        filterType: "Company Size",
        array: ["Small (1-50)", "Medium (51-200)", "Large (200+)"]
    }
];

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();

    const changeHandler = (value) => {
        setSelectedValue(value);
    };

    useEffect(() => {
        dispatch(setSearchedQuery(selectedValue));
    }, [selectedValue, dispatch]);

    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3' />
            <RadioGroup value={selectedValue} onValueChange={changeHandler}>
                {
                    filterData.map((data, index) => (
                        <div key={index}>
                            <h1 className='font-bold text-lg'>{data.filterType}</h1>
                            {
                                data.array.map((item, idx) => {
                                    const itemId = `id${index}-${idx}`;
                                    return (
                                        <div key={itemId} className='flex items-center space-x-2 my-2'>
                                            <RadioGroupItem value={item} id={itemId} />
                                            <Label htmlFor={itemId}>{item}</Label>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    ))
                }
            </RadioGroup>
        </div>
    );
};

export default FilterCard;
