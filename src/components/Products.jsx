import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Link to={`/product/${product._id}`}>
      <Card
        shadow="sm"
        key={product._id}
        isPressable
        className="w-full h-auto m-3"
      >
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={product.title}
            className="w-full object-cover h-64"
            src={product.image}
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <b className="text-lg">{product.name}</b>

          <p className="text-default-500 text-lg">{product.price}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
export default Product;
