import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
    LineChart,
    Line,
    ResponsiveContainer,
    Cell

} from "recharts";
import Slider from './Slider';


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [

        {
            path: "/about",
            name: "Medication Reminders",
            icon: <FaUserAlt />
        },
        {
            path: "/analytics",
            name: "Mood and Symptom Tracking",
            icon: <FaRegChartBar />
        },
        {
            path: "/comment",
            name: "Wellness Monitoring",
            icon: <FaCommentAlt />
        },
        {
            path: "/product",
            name: "Telehealth Consultations",
            icon: <FaShoppingBag />
        },
        {
            path: "/productList",
            name: "Patient Empowerment",
            icon: <FaThList />
        }
    ]

    const data = [
        { name: "1", Positive: 5, Negative: 23 },
        { name: "2", Positive: 7, Negative: 22 },
        { name: "3", Positive: 6, Negative: 22 },
        { name: "4", Positive: 5, Negative: 21 },
        { name: "5", Positive: 7, Negative: 21 },
        { name: "6", Positive: 8, Negative: 22 },
        { name: "7", Positive: 9, Negative: 21 },
        { name: "8", Positive: 10, Negative: 20 },
        { name: "9", Positive: 12, Negative: 20 },
        { name: "10", Positive: 15, Negative: 20 },
        { name: "11", Positive: 16, Negative: 18 },
        { name: "12", Positive: 16, Negative: 18 },
        { name: "13", Positive: 17, Negative: 17 },
        { name: "14", Positive: 18, Negative: 16 },
        { name: "15", Positive: 19, Negative: 15 },
        { name: "16", Positive: 20, Negative: 12 },
        { name: "17", Positive: 21, Negative: 13 },
        { name: "18", Positive: 20, Negative: 11 },
        { name: "19", Positive: 22, Negative: 10 },
        { name: "20", Positive: 18, Negative: 10 },
        { name: "21", Positive: 17, Negative: 9 },
        { name: "22", Positive: 20, Negative: 9 },
        { name: "23", Positive: 19, Negative: 8 },
        { name: "24", Positive: 20, Negative: 7 },
        { name: "25", Positive: 19, Negative: 7 },
        { name: "26", Positive: 18, Negative: 6 },
        { name: "27", Positive: 17, Negative: 5 },
        { name: "28", Positive: 20, Negative: 9 },
        { name: "29", Positive: 21, Negative: 8 },
        { name: "30", Positive: 22, Negative: 5 },
        { name: "31", Positive: 23, Negative: 5 },
    ];
    const pie1 = [
        { name: "Sleep", Positive: 33.3 },
        { name: "Awake", Positive: 66.6 }
    ];
    const pie2 = [
        { name: "<120", Positive: 40 },
        { name: "120-129", Positive: 30 },
        { name: "130-139", Positive: 16 },
        { name: ">=140", Positive: 10 },
        { name: ">180", Positive: 4 }
    ];
    const pie3 = [
        { name: "Family & Friends", Positive: 73 },
        { name: "Alone", Positive: 27 },
    ];
    const pie4 = [
        { name: "Relax", Positive: 37 },
        { name: "Tensed", Positive: 63 }
    ];


    const COLORS2 = ['#00ff00', '#ffff00', '#ffd966', '#ff9900', '#ff0000'];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const COLORS3 = ['#981c5f', '#aeb6b7', '#ff9900', '#ff0000'];
    const COLORS4 = ['cyan', '#aeb6b7', '#ff9900', '#ff0000'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };



    return (
        <div className="container">
            {/* <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar"> */}

            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">FORWORD</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
            <div className='mainC'>
                <div className='chartMain'>
                    <LineChart width={500} height={320} data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                        <Line type="monotone" dataKey="Positive" stroke="blue" />
                        <Line type="monotone" dataKey="Negative" stroke="red" />


                    </LineChart>


                </div>
                <div className='pieChart'>

                    <PieChart width={300} height={250}>
                        <Legend />
                        <Pie
                            data={pie1}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="Positive"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                    <div className='subChart'>
                        <PieChart width={300} height={240}>
                            <Pie
                                data={pie2}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="Positive"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]} />
                                ))}
                            </Pie>
                            <Legend />
                        </PieChart>
                    </div>



                </div>
                <div className='pieChart2'>

                    <PieChart width={300} height={250}>
                        <Pie
                            data={pie3}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="Positive"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS3[index % COLORS3.length]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>

                    <PieChart width={300} height={250}>
                        <Pie
                            data={pie4}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="Positive"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS4[index % COLORS4.length]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>


                </div>
                <div className='offer'>
                    <h2>What we offer</h2>
                    <p>
                        1. User Profiles: Allow patients to create individual profiles to personalize their experience within the app. Include basic information such as name, age, medical history, and prescribed medications.
                    </p>
                    <p>
                        2. Medication Reminders: Implement a medication reminder system to help patients adhere to their prescribed medication schedules. Set up customizable reminders for specific medications, dosage, and frequency.

                    </p>
                    <p>3. Medication Tracking: Enable patients to track their medication intake within the app. They can log the date, time, and dosage taken, creating a comprehensive record of their medication compliance.
                    </p>
                    <p>
                        4. Wellness Tracking: Incorporate features to monitor the patient's overall wellness. This may include tracking mood, sleep patterns, physical activity, and nutrition. Utilize scales or questionnaires to assess their well-being.

                    </p>
                    <p>
                        5. Alerts and Notifications: Send alerts and notifications to remind patients about upcoming appointments, therapy sessions, medication refills, or any other crucial events related to their mental health management.

                    </p>
                    <p>
                        6. Communication Tools: Provide secure communication channels for patients to connect with their healthcare providers, including psychiatrists, therapists, or support groups. They can send messages, schedule virtual appointments, and seek guidance or support.

                    </p>
                    <p>
                        7. Progress Visualization: Present data in an easily understandable format through charts or graphs, allowing patients and healthcare providers to track progress over time. This can motivate patients and assist healthcare providers in making informed decisions.

                    </p>
                    <p>
                        8. Educational Resources: Offer a library of educational resources related to mental health, including articles, videos, and audio recordings. Patients can access information about their condition, treatment options, coping strategies, and self-help techniques.

                    </p>
                    <p>
                        9. Emergency Support: Integrate emergency contact information, including helpline numbers, crisis hotlines, or local emergency services. Make this information readily accessible in case of a crisis or urgent situation.


                    </p>
                    <p>
                        10. Data Privacy and Security: Implement strong security measures to protect patient data, ensuring compliance with relevant healthcare regulations, such as the Health Insurance Portability and Accountability Act (HIPAA). Prioritize patient privacy and maintain strict data encryption protocols.

                    </p>
                </div>
            </div>
        </div>


    );
};

export default Sidebar;