import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";

interface ProjectCardProps {
    readonly title: string
    readonly description?: string
    readonly footer?: string
    readonly children: React.ReactNode

}

export default function ProjectCard({title, description, footer, children}: ProjectCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
            <CardContent>
                <p>{children}</p>
            </CardContent>
            {footer && <CardFooter>{footer}</CardFooter>}
        </Card>
    )
}