import { services } from "@/assets/assets";
import { ServiceProps } from "@/assets/json/service-list";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {/* map over services and display cards */}
            {services.map((service: ServiceProps) => (
                <Card key={service.id}>
                    <CardContent>
                        {service.icon}
                    </CardContent>
                    <CardHeader>
                        <CardTitle>{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
}