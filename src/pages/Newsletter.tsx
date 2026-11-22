import {
    Card,
    CardMedia,
    CardMeta,
    CardText,
    CardTitle,
} from '@/components/kit/Card'
import { PageHero } from '@/components/kit/PageHero'
import { PageMeta } from '@/components/kit/PageMeta'
import { Section, SectionHeading } from '@/components/kit/Section'
import { Button } from '@/components/ui/button'
import { ISSUES, SUBSTACK_URL } from '@/data/newsletter'
import { AI_REVIEW_URL } from '@/data/site'

const Newsletter = () => (
    <main className="bg-ink font-mono text-fg antialiased">
        <PageMeta
            title="Newsletter"
            description="Neural Notes, the UofT AI newsletter: AI news, club events and student highlights, sent to your inbox."
        />
        <PageHero
            variant="recap"
            title="Newsletter"
            subtitle="AI news, club events and student highlights."
            lede="Neural Notes is UofT AI's newsletter. Subscribe on Substack to get each issue by email."
            actions={
                <>
                    <Button asChild>
                        <a href={SUBSTACK_URL}>Subscribe on Substack</a>
                    </Button>
                    <Button asChild variant="outline">
                        <a href={AI_REVIEW_URL}>Read the Toronto AI Review</a>
                    </Button>
                </>
            }
        />
        <Section heading={<SectionHeading>Past issues</SectionHeading>}>
            <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {ISSUES.map((issue) => (
                    <Card key={issue.href} rule={!issue.photo}>
                        {issue.photo && <CardMedia photo={issue.photo} />}
                        <CardMeta>{issue.date}</CardMeta>
                        <CardTitle href={issue.href}>{issue.title}</CardTitle>
                        <CardText>{issue.description}</CardText>
                    </Card>
                ))}
            </div>
        </Section>
    </main>
)

export default Newsletter
