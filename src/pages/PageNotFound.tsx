import { Link, useLocation } from 'react-router'
import { PageMeta } from '@/components/kit/PageMeta'
import { Section, SectionHeading } from '@/components/kit/Section'
import { Button } from '@/components/ui/button'

const PageNotFound = () => {
    const { pathname } = useLocation()

    return (
        <main className="bg-ink font-mono text-fg antialiased">
            <PageMeta
                title="Page not found"
                description="This page doesn't exist."
                noindex
            />
            <Section
                spacing="none"
                className="flex min-h-[80svh] items-center pt-[calc(var(--site-header-height)+64px)] pb-24"
                heading={
                    <SectionHeading
                        as="h1"
                        size="lg"
                        kicker="404"
                        lede={
                            <p>
                                Nothing lives at{' '}
                                <code className="break-all text-fg">
                                    {pathname}
                                </code>
                                . It may have moved, or the link may be
                                mistyped.
                            </p>
                        }
                    >
                        Page not found
                    </SectionHeading>
                }
            >
                <Button asChild className="mt-12">
                    <Link to="/">Back to home</Link>
                </Button>
            </Section>
        </main>
    )
}

export default PageNotFound
