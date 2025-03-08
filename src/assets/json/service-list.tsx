import { Calendar, Check, Database, Kanban, MessageCircle, UsersRound } from "lucide-react";
import { JSX } from "react";

export interface ServiceProps {
    id: number;
    icon: JSX.Element;
    title: string;
    description: string;
}

const services: ServiceProps[] = [
    {
        id: 0,
        icon: <Check size={24} />,
        title: "Individual Todos",
        description: "Easily create, manage, and track personal tasks with an intuitive to-do list. Set deadlines, mark progress, and stay organized with reminders to boost productivity."
    },
    {
        id: 1,
        icon: <Kanban size={24} />,
        title: "Organize Tasks",
        description: "Optimize workflow with an intuitive Kanban Board. Categorize tasks, track progress, and streamline teamwork with customizable boards and easy drag-and-drop functionality."
    },
    {
        id: 2,
        icon: <Calendar size={24} />,
        title: "Strict Deadlines",
        description: "Keep projects on schedule with an integrated calendar. Plan ahead, set priority deadlines, and receive notifications to stay on track and meet important milestones."
    },
    {
        id: 3,
        icon: <MessageCircle size={24} />,
        title: "Stay in Touch",
        description: "Enhance team communication with real-time chat. Share updates, discuss ideas, and collaborate effortlessly through direct messages and group discussions."
    },
    {
        id: 4,
        icon: <UsersRound size={24} />,
        title: "Collaborate Seamlessly",
        description: "Work together in real-time with shared workspaces. Assign tasks, edit documents, and track changes effortlessly for smooth collaboration without confusion."
    },
    {
        id: 5,
        icon: <Database size={24} />,
        title: "Realtime Updates",
        description: "Stay informed with instant updates and live data synchronization. Get notified of task changes and progress to keep everyone aligned and up to date."
    }
];



export default services;