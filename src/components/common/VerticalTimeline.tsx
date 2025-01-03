import React from 'react';
import TogglePanel from './TogglePanel';

interface TimelineItem {
    title: string;
    description: string;
}

interface VerticalTimelineProps {
    items: TimelineItem[];
}

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ items }) => {
    return (
        <div className="flex flex-col">
            {items.map((item, index) => (
                <TimelineItemComponent key={index} item={item} index={index} />
            ))}
        </div>
    );
};

const TimelineItemComponent: React.FC<{ item: TimelineItem; index: number }> = ({ item, index }) => {
    return (
        <div className="flex gap-2.5 mb-1">
            <div className="flex flex-col items-center">
                <span className='flex self-stretch p-1 border-radius rounded-full mt-2 mb-2 bg-primary'>
                </span>

                <span className='w-0.5 flex-grow bg-primary'></span> 
            </div>
            <div className="flex-1 bg-card pl-2 pr-2">
                <TogglePanel title={item.title} value={item.title} setDefaultValue={false}>
                    {item.description}
                </TogglePanel>
            </div>
        </div>
    );
};

export default VerticalTimeline;