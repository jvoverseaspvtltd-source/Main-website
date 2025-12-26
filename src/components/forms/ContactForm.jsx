import Button from "../ui/Button";
import Input from "../ui/Input";

const ContactForm = () => {
    return (
        <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="First Name" id="firstName" placeholder="John" />
                <Input label="Last Name" id="lastName" placeholder="Doe" />
            </div>
            <Input label="Email" id="email" type="email" placeholder="john@example.com" />
            <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                    id="message"
                    rows={4}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <Button type="submit" className="w-full md:w-auto">Send Message</Button>
        </form>
    );
};

export default ContactForm;
