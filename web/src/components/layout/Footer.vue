<template>
	<v-footer color="success" app>
		<div style="font-size: 14px">
			<span class="white--text">&copy; 2021</span>
			<span class="white--text ml-1" v-text="siteTitle"></span>
		</div>
	</v-footer>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { SITE_TITLE } from '@/config';
export default {
	name: 'TheFooter',
	data() {
		return {
			siteTitle: SITE_TITLE
		}
	},
	computed:{
		...mapGetters(['footerMenus'])
	},
	methods:{
		
	}
}
</script>
