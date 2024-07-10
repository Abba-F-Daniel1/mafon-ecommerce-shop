"use client";

import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const ProductCard: React.FC<{ item: any }> = ({ item }) => {
  return (
    <Card shadow="lg" isPressable onPress={() => console.log("item pressed")} className="p-4 rounded-lg mx-2 my-4">
      <CardBody className="overflow-visible">
        <Image
          shadow="lg"
          radius="lg"
          width="100%"
          alt={item.title}
          className="w-full object-fill"
          src={item.img}
        />
      </CardBody>
      <CardFooter className="text-small flex-col p-2">
        <b>{item.title}</b>
        <p className="text-default-500 p-2">{item.price}</p>
        <Button color="primary" className="rounded-full w-full text-white">
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
