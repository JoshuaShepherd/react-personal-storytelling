"use client"

interface TimelineItem {
  year: string
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-warm-300"></div>

      <div className="space-y-12">
        {items.map((item, index) => (
          <div key={index} className="relative flex items-start">
            {/* Timeline dot */}
            <div className="absolute left-2 md:left-6 w-4 h-4 bg-sage-500 rounded-full border-4 border-white shadow-sm"></div>

            {/* Content */}
            <div className="ml-12 md:ml-20">
              <div className="story-card">
                <div className="text-sm font-medium text-sage-600 mb-2">{item.year}</div>
                <h3 className="text-xl font-serif text-warm-900 mb-3">{item.title}</h3>
                <p className="story-body">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
