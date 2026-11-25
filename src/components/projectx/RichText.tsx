import { SmartLink } from '@/components/kit/SmartLink'
import type { Block, Inline, Rich } from '@/data/projectx/types'

const InlineText = ({ value }: { value: Inline }) => {
    if (typeof value === 'string') return value
    if ('href' in value)
        return <SmartLink to={value.href}>{value.text}</SmartLink>
    return <strong>{value.strong}</strong>
}

export const RichLine = ({ value }: { value: Rich }) =>
    (Array.isArray(value) ? value : [value]).map((run, i) => (
        <InlineText key={i} value={run} />
    ))

/** Paragraphs and lists from a cycle's data file. Style it with `copy`. */
export const RichText = ({ blocks }: { blocks: Block[] }) =>
    blocks.map((block, i) =>
        typeof block === 'object' && 'list' in block ? (
            <ul key={i}>
                {block.list.map((item, j) => (
                    <li key={j}>
                        <RichLine value={item} />
                    </li>
                ))}
            </ul>
        ) : (
            <p key={i}>
                <RichLine value={block} />
            </p>
        ),
    )
