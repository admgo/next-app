import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import React from "react";

export default function SigninWithSSO() {
  return (
    <Button
      disableAnimation={true}
      startContent={<Icon icon="flat-color-icons:google" width={24} />}
      variant="bordered"
    >
      Continue with Google
    </Button>
  );
}
