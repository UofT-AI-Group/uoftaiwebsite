const SITE_NAME = 'UofT AI'

/**
 * Sets the document title and description for a route. React hoists these
 * tags into <head> and removes them when the page unmounts, so each route
 * renders exactly one PageMeta.
 */
export const PageMeta = ({
    title,
    description,
    noindex = false,
}: {
    /** Page name without the site name. Leave out on the homepage. */
    title?: string
    description: string
    noindex?: boolean
}) => (
    <>
        <title>{title ? `${title} | ${SITE_NAME}` : SITE_NAME}</title>
        <meta name="description" content={description} />
        {noindex && <meta name="robots" content="noindex" />}
    </>
)
