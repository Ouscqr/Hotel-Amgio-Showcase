import { toast } from "sonner";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { openBookingPage } from "@/lib/booking";

interface BookingButtonProps extends ButtonProps {
  label: string;
}

/**
 * Call-to-action that hands the visitor over to the booking engine.
 *
 * The booking engine endpoint is configuration, not code: when it is not set
 * (public demo build) we explain the situation instead of navigating to a
 * broken or third-party URL.
 */
export default function BookingButton({
  label,
  ...props
}: BookingButtonProps) {
  const { t } = useLanguage();

  const handleClick = () => {
    if (!openBookingPage()) {
      toast.info(t.bookingForm.notConfigured);
    }
  };

  return (
    <Button type="button" onClick={handleClick} {...props}>
      {label}
    </Button>
  );
}
