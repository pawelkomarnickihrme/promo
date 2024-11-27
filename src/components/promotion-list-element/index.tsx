import { ArrowUpRight, ChevronDown, ChevronUp, MessageSquare, Bookmark } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { Promotion } from '../../../payload-types'

export default function PromotionCard({
  title,
  content,
  thumbnail,
  promotion_link,
  start_date,
  end_date,
  company,
}: Promotion) {
  const temperature = 751 // Example temperature
  const comments = 59 // Example comment count

  return (
    <Card className="max-w-4xl mx-auto bg-background">
      <div className="flex gap-4 p-4">
        {/* Left side - Image */}
        <div className="relative w-48 h-48 flex-shrink-0">
          <Image
            src={thumbnail.url!}
            alt={title}
            width={thumbnail.width!}
            height={thumbnail.height!}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex-1 space-y-4">
          {/* Header with temperature */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-muted rounded-full px-3 py-1">
              <ChevronDown className="h-4 w-4" />
              <span className="font-bold text-red-500">{temperature}°</span>
              <ChevronUp className="h-4 w-4" />
            </div>

            {/* Date info */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{new Date(end_date).toLocaleDateString('pl-PL')}</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold">{title}</h2>

          {/* Content */}
          <p className="text-muted-foreground">{content}</p>

          {/* Company info */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src={company.thumbnail.url!}
                  alt={company.name}
                  width={24}
                  height={24}
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-medium">{company.name}</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-4">
            <Button className="bg-[#F73D28] hover:bg-[#E03523] text-white" asChild>
              <a href={promotion_link!} target="_blank" rel="noopener noreferrer">
                Idź do okazji
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-4 w-4" />
                <span className="ml-2 text-sm">{comments}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
