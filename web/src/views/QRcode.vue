<template>
   <v-container>
		<section >
			<div class="py-6"></div>
			<v-container class="text-center">
				<h2 class="display-2 font-weight-bold mb-3">
					<span class="cn">手機版</span>
				</h2>
				<v-responsive class="mx-auto title font-weight-light mb-8" max-width="720">
					<qrcode :value="siteUrl" :options="{ width: 280 }"></qrcode>
				</v-responsive>
			</v-container>
		</section>
   </v-container>
</template>

<script>
import { SITE_URL } from '@/config';
export default {
	name: 'QRcodeView',
	data(){
		return {
			siteUrl: SITE_URL
		}
	},
}
</script>

<style>

</style>