import type { ComponentProps } from 'react'
import { Link } from 'react-router'
import { isExternal } from '@/data/site'

/** A router link for site paths and a plain anchor for URLs, mailto and files. */
export const SmartLink = ({
    to,
    download,
    ...props
}: Omit<ComponentProps<'a'>, 'href'> & { to: string }) =>
    isExternal(to) || download !== undefined ? (
        <a href={to} download={download} {...props} />
    ) : (
        <Link to={to} {...props} />
    )
