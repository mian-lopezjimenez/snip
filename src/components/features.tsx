import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { snipFeatures } from "@/lib/data";

const Features = () => {
  return (
    <section className="w-full md:w-[700px] mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {snipFeatures.map(({ icon, title, content }) => (
        <Card key={title} className="h-48">
          <CardHeader>
            <CardTitle className="flex gap-x-2">
              {icon} {title}
            </CardTitle>
          </CardHeader>

          <CardContent>{content}</CardContent>
        </Card>
      ))}
    </section>
  );
};

export default Features;
