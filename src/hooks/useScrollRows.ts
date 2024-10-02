import { useEffect, useState } from 'react';
import { ICompany } from '../store/companies';

export const useScrollRows = (data: ICompany[]) => {
	const [visibleCount, setVisibleCount] = useState(15);
	const [isFetching, setIsFetching] = useState(false);
	const [loading, setLoading] = useState(false);

	const loadMoreCompanies = () => {
		setLoading(true);
		setTimeout(() => {
			setVisibleCount((prevCount) => prevCount + 10);
			setIsFetching(false);
			setLoading(false);
		}, 1000);
	};

	const handleScroll = () => {
		if (
			window.innerHeight + document.documentElement.scrollTop !==
				document.documentElement.offsetHeight ||
			isFetching
		)
			return;
		setIsFetching(true);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [isFetching]);

	useEffect(() => {
		if (!isFetching) return;
		loadMoreCompanies();
	}, [isFetching]);

	const visibleCompanies = data.slice(0, visibleCount);

	return { loading, visibleCompanies };
};
