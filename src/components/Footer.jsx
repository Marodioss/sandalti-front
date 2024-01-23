import { Card, CardBody } from "@nextui-org/react";
import "../assets/styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-background footer">
      <Card bordered shadow>
        <CardBody>
          <div className="flex flex-col items-center justify-center">
            <p className="text-center text-default-500 dark:text-default-400">
              © {year} Sandalti. All rights reserved.
            </p>
          </div>
        </CardBody>
      </Card>
    </footer>
  );
}
