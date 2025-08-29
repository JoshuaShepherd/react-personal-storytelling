"use client"

interface Value {
  title: string
  description: string
  icon: React.ReactNode
}

interface ValuesRowProps {
  values: Value[]
}

export function ValuesRow({ values }: ValuesRowProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {values.map((value, index) => (
        <div key={index} className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-6">
            <div className="text-sage-600 w-8 h-8">
              {value.icon}
            </div>
          </div>
          <h3 className="text-xl font-serif text-warm-900 mb-4">{value.title}</h3>
          <p className="story-body">{value.description}</p>
        </div>
      ))}
    </div>
  )
}
