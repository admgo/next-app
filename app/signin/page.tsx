"use client";

import React from "react";
import { Link, Divider, Tabs, Tab, Card, CardBody } from "@heroui/react";

import SigninWithSSO from "./components/signin-with-sso";
import SigninWithMailAndPassword from "./components/signin-with-mail-and-password";

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

  const [loginWith, setLoginWith] = React.useState("local");

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

        <Tabs
          aria-label="local"
          selectedKey={loginWith}
          size="sm"
          onSelectionChange={setLoginWith}
        >
          <Tab key="local" title="Local">
            <Card>
              <CardBody>
                <SigninWithMailAndPassword />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="music" title="Music" />
        </Tabs>

        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="shrink-0 text-default-500 text-xs font-bold">OR</p>
          <Divider className="flex-1" />
        </div>
        <div className="flex flex-col gap-2">
          <SigninWithSSO />
        </div>
        <p className="text-center text-xs">
          使用即代表您同意我们的&nbsp;
          <Link className="text-xs font-bold" href="#">
            使用协议
          </Link>
          &nbsp; & &nbsp;
          <Link className="text-xs font-bold" href="#">
            隐私政策
          </Link>
        </p>
      </div>
    </div>
  );
}
