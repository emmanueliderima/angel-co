import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

interface MeetingModalProps { 
    isOpen: boolean
    onClose: () => void
    title: string
    style?: string
    buttonText?: string
    childern?: React.ReactNode
    image?: string
    buttonIcon?: string
    handleClick?: () => void
}

const MeetingModal = ({isOpen, onClose, title, style, buttonText, buttonIcon, childern, image, handleClick}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="flex w-full max-w-[400px] flex-col gap-6 px-6 py-9 items-center bg-dark-2 border-none text-white">
            <div className="flex flex-col gap-6">
                {
                    image && (
                        <div className="flex justify-center items-center rounded-xl">
                            <img src={image} alt="meeting" className="w-[24px] h-[24px]" />
                        </div>
                    )
                }
                <h1 className={cn(style, "text-3xl leading-[42px] font-bold")}>
                    {title}
                </h1>
                {childern}
                <Button 
                    className="bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0"
                    onClick={handleClick}
                >
                    {
                        buttonIcon && (
                            <img src={buttonIcon} alt="button icon" className="w-[13px] h-[13px]" />
                        )
                    } &nbsp; 
                    {buttonText || "Schedule Meeting"}
                </Button>
            </div>
            
        </DialogContent>
    </Dialog>
  )
}

export default MeetingModal