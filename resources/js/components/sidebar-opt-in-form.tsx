import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function SidebarOptInForm() {
    return (
        <Card className="shadow-none py-4">
            <form>
                <CardHeader className="p-4 pb-0 pt-0">
                    <CardTitle className="text-sm">Subscribe to our newsletter</CardTitle>
                    <CardDescription>
                        Opt-in to receive updates and news about the sidebar.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-2.5 p-4 pb-0">
                    <Button
                        type="button"
                        className="w-full bg-sidebar-primary text-sidebar-primary-foreground shadow-none"
                        size="sm"
                    >
                        Subscribe
                    </Button>
                </CardContent>
            </form>
        </Card>
    )
}
