// hooks/useIntersectionObserver.tsx
import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (setActiveSection: (id: string) => void) => {
    const sectionsRef = useRef(new Map<string, IntersectionObserverEntry>());

    useEffect(() => {
        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                sectionsRef.current.set(entry.target.id, entry);
            });

            const visibleSections = Array.from(sectionsRef.current.values())
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

            if (visibleSections.length > 0) {
                setActiveSection(visibleSections[0].target.id);
            }
        };

        const observer = new IntersectionObserver(callback, {
            root: null,
            rootMargin: '0px',
            threshold: 0.25,
        });

        const sectionElements = document.querySelectorAll('section[id]');
        sectionElements.forEach((section) => observer.observe(section));
        
        return () => {
            observer.disconnect();
        };
    }, [setActiveSection]);
};

export default useIntersectionObserver;
