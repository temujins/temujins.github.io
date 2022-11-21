import React, { useState, useEffect } from "react"
import type { IReview } from "@/interfaces"

import Image from "next/image"

interface Props {
	review: IReview
	activeIndex: number
	index: number
	prevIndex: number
	isRight: boolean
}

export const ReviewCard: React.FC<Props> = ({
	review,
	activeIndex,
	index,
	prevIndex,
	isRight,
}) => {
	const [animClass, setAnimClass] = useState("")

	useEffect(() => {
		if (activeIndex === index) {
			setAnimClass(isRight ? "fadein-right" : "fadein-left")
		} else if (prevIndex === index) {
			setAnimClass(isRight ? "fadeout-left" : "fadeout-right")
		}
	}, [activeIndex, index, isRight, prevIndex])

	return (
		<div className={`review-card ${animClass}`}>
			<div className="absolute bottom-0 right-0 left-0 top-[60px] shadow-lg rounded-2xl"></div>
			<div className="w-[80px] h-[80px] rounded-full border-[3px] border-primary overflow-hidden mb-2">
				<Image
					src={review.avatar}
					alt=""
					height="80px"
					width="80px"
					className="w-full h-full object-cover"
				/>
			</div>
			<h4 className="text-h4 min-w-max">{review.name}</h4>
			<p className="w-full text-center min-w-max mb-6 text-sm md:text-base">
				<span className="opacity-80">{review.role}, </span>
				<span className="text-primary">{review.company}</span>
			</p>
			<p className="text-center">{review.text}</p>
		</div>
	)
}