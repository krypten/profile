import React from 'react';
import { ExperienceSection } from './experience-section';
import { ExperienceSectionData, ExperienceCategory } from '@/lib/types';
import { mapIcon, mapIconItems, mapIconPair } from '@/lib/utils/icon-mapping';

interface ExperienceSectionsProps {
  experiences: ExperienceSectionData[];
}

export function ExperienceSections({ experiences }: ExperienceSectionsProps) {
  return (
    <>
      {experiences.map((experience) => {
        return (
          <ExperienceSection
            key={experience.id}
            id={experience.id}
            category={experience.category}
            title={experience.title}
            description={experience.description}
            projects={experience.projects}
            highlights={mapIconItems(experience.highlights)}
            icons={mapIconPair(experience.icons)}
            alternateBackground={experience.alternateBackground}
          />
        );
      })}
    </>
  );
}