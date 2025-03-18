import Image from "next/image";
import Link from "next/link";

import { ChevronRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { footerData } from "./data/constants/constants";
import { FooterProps } from "./data/types/types";

export default function Footer({
    helpColumn = footerData.helpColumn,
    citiesColumn = footerData.citiesColumn,
    aboutColumn = footerData.aboutColumn,
    partnersColumn = footerData.partnersColumn,
    companyInfo = footerData.companyInfo,
    socialLinks = footerData.socialLinks,
}: Partial<FooterProps> = footerData) {
    return (
        <footer className="h-[90vh] border-t bg-background text-foreground">
            <div className="container mx-auto flex h-full flex-col px-4 md:px-6">
                {/* Main footer content */}
                <div className="grid flex-1 grid-cols-1 gap-10 pt-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Help Column */}
                    <div className="space-y-6">
                        <h3 className="text-base font-semibold uppercase tracking-wide text-primary">
                            {helpColumn.title}
                        </h3>
                        <nav aria-label="Help and support">
                            <ul className="space-y-3.5">
                                {helpColumn.links.map((link, index) => (
                                    <li key={`help-${index}`}>
                                        <Button
                                            asChild
                                            variant="ghost"
                                            size="sm"
                                            className="h-auto w-full justify-start p-0 hover:bg-transparent"
                                        >
                                            <Link
                                                href={link.href}
                                                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                                            >
                                                {link.icon}
                                                <span className="text-sm">
                                                    {link.label}
                                                </span>
                                            </Link>
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="flex flex-col space-y-5 pt-2">
                            <Card className="max-w-[220px] border border-muted/60 bg-background shadow-sm">
                                <CardContent className="flex flex-col items-start p-4">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={helpColumn.qrCode.src}
                                            alt={helpColumn.qrCode.alt}
                                            width={90}
                                            height={90}
                                            className="h-20 w-20 object-contain"
                                        />
                                        <p className="text-sm text-muted-foreground">
                                            Download the
                                            <br />
                                            mobile app
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="flex gap-3">
                                <Link
                                    href={helpColumn.appStoreLinks.apple.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block"
                                >
                                    <Image
                                        src={helpColumn.appStoreLinks.apple.src}
                                        alt={helpColumn.appStoreLinks.apple.alt}
                                        width={120}
                                        height={40}
                                        className="h-10 w-auto transition-opacity hover:opacity-90"
                                    />
                                </Link>
                                <Link
                                    href={helpColumn.appStoreLinks.google.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block"
                                >
                                    <Image
                                        src={
                                            helpColumn.appStoreLinks.google.src
                                        }
                                        alt={
                                            helpColumn.appStoreLinks.google.alt
                                        }
                                        width={120}
                                        height={40}
                                        className="h-10 w-auto transition-opacity hover:opacity-90"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Cities Column */}
                    <div className="space-y-6">
                        <h3 className="text-base font-semibold uppercase tracking-wide text-primary">
                            {citiesColumn.title}
                        </h3>
                        <nav aria-label="Cities navigation">
                            <ul className="grid grid-cols-2 gap-x-2 gap-y-3.5">
                                {citiesColumn.links.map((link, index) => (
                                    <li key={`city-${index}`}>
                                        <Button
                                            asChild
                                            variant="ghost"
                                            size="sm"
                                            className="h-auto w-full justify-start p-0 hover:bg-transparent"
                                        >
                                            <Link
                                                href={link.href}
                                                className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                                            >
                                                <span>{link.label}</span>
                                                {link.label === "+161 more" && (
                                                    <ChevronRight className="ml-1 h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                                                )}
                                            </Link>
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* About Column */}
                    <div className="space-y-6">
                        <h3 className="text-base font-semibold uppercase tracking-wide text-primary">
                            {aboutColumn.title}
                        </h3>
                        <nav aria-label="About us">
                            <ul className="space-y-3.5">
                                {aboutColumn.links.map((link, index) => (
                                    <li key={`about-${index}`}>
                                        <Button
                                            asChild
                                            variant="ghost"
                                            size="sm"
                                            className="h-auto w-full justify-start p-0 hover:bg-transparent"
                                        >
                                            <Link
                                                href={link.href}
                                                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                            >
                                                {link.label}
                                            </Link>
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Partners Column */}
                    <div className="space-y-6">
                        <h3 className="text-base font-semibold uppercase tracking-wide text-primary">
                            {partnersColumn.title}
                        </h3>
                        <nav aria-label="Partners">
                            <ul className="space-y-3.5">
                                {partnersColumn.links.map((link, index) => (
                                    <li key={`partner-${index}`}>
                                        <Button
                                            asChild
                                            variant="ghost"
                                            size="sm"
                                            className="h-auto w-full justify-start p-0 hover:bg-transparent"
                                        >
                                            <Link
                                                href={link.href}
                                                className="group flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                                            >
                                                <span>{link.label}</span>
                                                <ExternalLink className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                                            </Link>
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="pt-4">
                            <h4 className="mb-4 text-xs font-medium uppercase text-muted-foreground">
                                We Accept
                            </h4>
                            <div className="grid grid-cols-4 gap-2">
                                {partnersColumn.paymentMethods.map(
                                    (method, index) => (
                                        <div
                                            key={`payment-${index}`}
                                            className="flex items-center justify-center rounded-md border border-border/40 bg-card p-1.5 shadow-sm transition-all hover:border-border hover:shadow-md"
                                        >
                                            <Image
                                                src={method.icon}
                                                alt={method.alt}
                                                width={36}
                                                height={24}
                                                className="h-5 w-auto"
                                            />
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom footer content */}
                <div className="py-6">
                    <Separator className="mb-6" />

                    <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between">
                        <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row md:w-auto">
                            <Link
                                href="/"
                                className="transition-opacity hover:opacity-90"
                            >
                                <Image
                                    src={companyInfo.logo.src}
                                    alt={companyInfo.logo.alt}
                                    width={100}
                                    height={30}
                                    className="size-fulll"
                                />
                            </Link>

                            <p className="text-center text-xs text-muted-foreground">
                                {companyInfo.copyright}
                            </p>
                        </div>

                        <div className="flex items-center justify-center gap-8 md:justify-end">
                            <div className="flex space-x-4">
                                {socialLinks.map((link, index) => (
                                    <Button
                                        key={`social-${index}`}
                                        asChild
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 rounded-full"
                                    >
                                        <Link
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={link.alt}
                                        >
                                            <Image
                                                src={link.icon}
                                                alt={link.alt}
                                                width={20}
                                                height={20}
                                                className="h-4 w-4"
                                            />
                                        </Link>
                                    </Button>
                                ))}
                            </div>

                            <Separator
                                orientation="vertical"
                                className="hidden h-6 md:block"
                            />

                            <div className="hidden gap-6 md:flex">
                                <Button
                                    asChild
                                    variant="link"
                                    size="sm"
                                    className="h-auto p-0 text-xs text-muted-foreground hover:text-primary"
                                >
                                    <Link href={companyInfo.privacyLink.href}>
                                        {companyInfo.privacyLink.label}
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="link"
                                    size="sm"
                                    className="h-auto p-0 text-xs text-muted-foreground hover:text-primary"
                                >
                                    <Link href={companyInfo.termsLink.href}>
                                        {companyInfo.termsLink.label}
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center gap-6 md:hidden">
                        <Button
                            asChild
                            variant="link"
                            size="sm"
                            className="h-auto p-0 text-xs text-muted-foreground hover:text-primary"
                        >
                            <Link href={companyInfo.privacyLink.href}>
                                {companyInfo.privacyLink.label}
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="link"
                            size="sm"
                            className="h-auto p-0 text-xs text-muted-foreground hover:text-primary"
                        >
                            <Link href={companyInfo.termsLink.href}>
                                {companyInfo.termsLink.label}
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
