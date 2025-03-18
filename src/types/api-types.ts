'use strict';

export interface Overview {
	totalSavings: number;
	currentMonthSavings: number;
	percentageChange: number;
}

export interface SavingsTrends {
	month: string;
	savings: number;
}

export interface SavingsByCategory {
	service: string;
	savings: number;
}

export interface DetailedSavings {
	date: string;
	service: string;
	amount: number;
}

export interface AWSDashboardPropTypes {
	overview: Overview;
	savingsTrends: SavingsTrends[];
	savingsByCategory: SavingsByCategory[];
	detailedSavings: DetailedSavings[];
}
