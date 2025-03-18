<script lang="ts">
	import type { Overview } from '../../types/api-types';
	import OverviewCard from './OverviewCard.svelte';
	import BankNotes from './icons/BankNotes.svelte';
	import Calendar from './icons/Calendar.svelte';
	import TrendingUp from './icons/TrendingUp.svelte';
	import SectionHeader from './SectionHeader.svelte';

	export let overview: Overview;
</script>

<div class="flex flex-col gap-6">
	<SectionHeader text="overview" />
	<div class="flex w-full flex-col justify-between gap-4 md:flex-row md:gap-8">
		<OverviewCard title="Total Savings" value={overview.totalSavings}><BankNotes /></OverviewCard>
		<OverviewCard title="Current Month Savings" value={overview.currentMonthSavings}
			><Calendar /></OverviewCard
		>
		<OverviewCard title="Percentage Change" value={overview.percentageChange} isPercentage
			><TrendingUp /></OverviewCard
		>
	</div>
</div>
