import {Head} from "@inertiajs/react";
import {Button} from "@/components/ui/button";

export default function Dashboard() {
    return (
        <div className="container mx-auto">
            <Head title="Dashboard"/>
            <div>Hello from react with inertia</div>
            <Button>Click Me</Button>
        </div>
    )
}
