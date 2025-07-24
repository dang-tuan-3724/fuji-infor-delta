
import { Mail, Phone, Facebook } from "lucide-react";
import { TiktokIcon } from "../icons/tiktok-icon";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const contactMethods = [
  {
    icon: <Mail className="w-8 h-8 text-primary" />,
    title: "Email",
		value: "fujijapanesecorner@gmail.com",
		href: "mailto:fujijapanesecorner@gmail.com"
  },
  {
    icon: <Facebook className="w-8 h-8 text-primary" />,
    title: "Facebook",
		value: "https://www.facebook.com/FujiBKHCM",
		href: "https://www.facebook.com/FujiBKHCM"
  },
  {
    icon: <TiktokIcon className="w-8 h-8 text-primary" />,
    title: "TikTok",
    value: "@fujiclub",
    href: "#"
  },
  {
    icon: <Phone className="w-8 h-8 text-primary" />,
    title: "Phone",
    value: "(123) 456-7890",
    href: "tel:1234567890"
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-20 lg:py-24 bg-white dark:bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Get In Touch</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have questions or want to collaborate? Reach out to us through any of these channels.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-12 sm:gap-6 lg:grid-cols-4">
          {contactMethods.map((method) => (
            <a key={method.title} href={method.href} className="group">
              <Card className="h-full text-center transition-all duration-300 group-hover:bg-card/80 group-hover:shadow-lg group-hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    {method.icon}
                  </div>
                  <CardTitle>{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* <p className="text-muted-foreground">{method.value}</p> */}
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
