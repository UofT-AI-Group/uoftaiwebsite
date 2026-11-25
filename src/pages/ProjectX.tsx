import { CyclePage } from '@/components/projectx/CyclePage'
import { CURRENT_CYCLE, PAST_CYCLES, toEdition } from '@/data/projectx'

const ProjectX = () => (
    <CyclePage
        cycle={CURRENT_CYCLE}
        title="ProjectX"
        archive={{
            title: 'Past cycles',
            editions: PAST_CYCLES.map(toEdition),
        }}
    />
)

export default ProjectX
