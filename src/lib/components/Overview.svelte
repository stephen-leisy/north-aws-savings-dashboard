<script lang="ts">
	import type { Overview } from '../../types/api-types';
	import Card from './Card.svelte';
	import BankNotes from './icons/BankNotes.svelte';
	import Calendar from './icons/Calendar.svelte';
	import TrendingUp from './icons/TrendingUp.svelte';
	import SectionHeader from './SectionHeader.svelte';

	export let overview: Overview;
</script>

<div class="flex flex-col gap-6">
	<SectionHeader text="overview" />
	<div class="flex w-full flex-col justify-between gap-4 md:flex-row md:gap-8">
		<Card title="Total Savings" value={overview.totalSavings}><BankNotes /></Card>
		<Card title="Current Month Savings" value={overview.currentMonthSavings}><Calendar /></Card>
		<Card title="Percentage Change" value={overview.percentageChange} isPercentage
			><TrendingUp /></Card
		>
	</div>
</div>
