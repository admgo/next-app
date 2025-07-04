"use client";

import React from "react";
import {
  Button,
  Input,
  Checkbox,
  Link,
  Form,
  Divider,
  Tabs,
  Tab,
  Card,
  CardBody,
} from "@heroui/react";
import { Icon } from "@iconify/react";

import SigninWithSSO from "./components/signin-with-sso";

import { Logo } from "@/components/icons";

type AuthProvider = {
  id: string;
  name: string;
  icon: string;
  link: string;
  type: "email-password" | "sso" | "ldap";
};
type AuthProviders = AuthProvider[];

const authProviders: AuthProviders = [
  {
    id: "1",
    name: "Email Password",
    icon: "bi:envelope-fill",
    link: "/signin/email-password",
    type: "email-password",
  },
  {
    id: "2",
    name: "Email Password2",
    icon: "bi:envelope-fill2",
    link: "/signin/email-password",
    type: "email-password",
  },
];

export default function Component() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large">
        <div className="flex flex-col items-center pb-6">
          <Logo size={46} />
          <p className="text-xl font-medium">Welcome Back</p>
          <p className="text-small text-default-500">
            Log in to your account to continue
          </p>
        </div>

        <div className="flex w-full flex-col">
          {(authProviders || []).filter(
            (item) => item.type === "ldap" || item.type === "email-password",
          ).length < 1 ? (
            <div>111</div>
          ) : (
            (authProviders || [])
              .filter(
                (item) =>
                  item.type === "ldap" || item.type === "email-password",
              )
              .map((item) => <div key={item.id}>{item.name}</div>)
          )}
          {authProviders.length <= 0 && (
            <Tabs aria-label="Options">
              <Tab key="photos" title="Photos">
                <Form
                  className="flex flex-col gap-3"
                  validationBehavior="native"
                  onSubmit={handleSubmit}
                >
                  <Input
                    isRequired
                    label="Email Address"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    variant="bordered"
                  />
                  <Input
                    isRequired
                    endContent={
                      <button type="button" onClick={toggleVisibility}>
                        {isVisible ? (
                          <Icon
                            className="pointer-events-none text-2xl text-default-400"
                            icon="solar:eye-closed-linear"
                          />
                        ) : (
                          <Icon
                            className="pointer-events-none text-2xl text-default-400"
                            icon="solar:eye-bold"
                          />
                        )}
                      </button>
                    }
                    label="Password"
                    name="password"
                    placeholder="Enter your password"
                    type={isVisible ? "text" : "password"}
                    variant="bordered"
                  />
                  <div className="flex w-full items-center justify-between px-1 py-2">
                    <Checkbox name="remember" size="sm">
                      Remember me
                    </Checkbox>
                    <Link className="text-default-500" href="#" size="sm">
                      Forgot password?
                    </Link>
                  </div>
                  <Button className="w-full" color="primary" type="submit">
                    Sign In
                  </Button>
                </Form>
              </Tab>
              <Tab key="music" title="Music">
                <Card>
                  <CardBody>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          )}
        </div>

        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="shrink-0 text-tiny text-default-500">OR</p>
          <Divider className="flex-1" />
        </div>
        <div className="flex flex-col gap-2">
          <SigninWithSSO />
        </div>
        <p className="text-center text-small">
          Need to create an account?&nbsp;
          <Link href="#" size="sm">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
