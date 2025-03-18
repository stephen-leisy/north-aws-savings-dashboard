<script>
	import DashboardWrapperHeader from './DashboardWrapperHeader.svelte';
</script>

<main class="h-screen w-screen overflow-y-scroll bg-[#1E2125] p-4 text-white md:p-8">
	<div class="h-24 h-fit max-w-6xl rounded-2xl border-1 border-[#3E404D]">
		<DashboardWrapperHeader title="AWS Savings Dashboard" />
		<section class="flex flex-col gap-10 p-4 md:p-8">
			<slot />
		</section>
	</div>
</main>
