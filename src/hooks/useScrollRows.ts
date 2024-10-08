import { useEffect, useState } from 'react';

export const useScrollRows = <T>(data: T[]) => {
	const [visibleCount, setVisibleCount] = useState(20);
	const [isFetching, setIsFetching] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (
				window.innerHeight + document.documentElement.scrollTop !==
					document.documentElement.offsetHeight ||
				isFetching
			)
				return;
			setIsFetching(true);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [isFetching]);

	useEffect(() => {
		const loadMoreCompanies = () => {
			setLoading(true);
			setTimeout(() => {
				setVisibleCount((prevCount) => prevCount + 10);
				setIsFetching(false);
				setLoading(false);
			}, 1000);
		};
		
		if (!isFetching) return;
		loadMoreCompanies();
	}, [isFetching]);

	const visibleCompanies = data.slice(0, visibleCount);

	return { loading, visibleCompanies };
};
