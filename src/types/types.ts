export type Achievement = {
    description: string
}

export type Position = {
    title: string
    period: string
    contractType?: string
}

export type Project = {
    description: string
    achievements: Achievement[]
    positions: Position[]
    skills: string[]
}

export type Experience = {
    company: string
    companyDisplayName: string
    contract: string
    period: string
    location: string
    projects: Project[]
}

export type Formation = {
    title: string
    school: string
    period: string
    location: string
    description: string
    achievement: string
    skills: string[]
}

export type Feedback = {
    authorName: string
    linkedin: string
    title: string
    company: string
    content: string
}
