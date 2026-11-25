import { Link, Navigate, useLocation, useParams } from 'react-router'
import { CyclePage } from '@/components/projectx/CyclePage'
import { Button } from '@/components/ui/button'
import {
    CURRENT_CYCLE,
    PAST_CYCLES,
    findPastCycle,
    toEdition,
} from '@/data/projectx'
import PageNotFound from './PageNotFound'

const EDITIONS = [CURRENT_CYCLE, ...PAST_CYCLES].map(toEdition)

/**
 * A past cycle at `/projectx/<year>`. The current cycle's year redirects to
 * `/projectx`, where it lives, so older links to it keep working.
 */
const ProjectXArchive = () => {
    const { year } = useParams()
    const { hash } = useLocation()

    if (year === String(CURRENT_CYCLE.year))
        return <Navigate to={{ pathname: CURRENT_CYCLE.href, hash }} replace />

    const cycle = findPastCycle(year)
    if (!cycle) return <PageNotFound />

    return (
        <CyclePage
            key={cycle.year}
            cycle={cycle}
            title={`ProjectX ${cycle.year}`}
            archive={{
                title: 'Every ProjectX',
                editions: EDITIONS,
                current: cycle.href,
            }}
            heroActions={
                <Button asChild variant="outline">
                    <Link to={CURRENT_CYCLE.href}>
                        See ProjectX {CURRENT_CYCLE.year}
                    </Link>
                </Button>
            }
        />
    )
}

export default ProjectXArchive
