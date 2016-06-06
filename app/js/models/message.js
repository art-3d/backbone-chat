Chat.Models.Message = Backbone.Model.extend({
	defaults: {
		name: 'anonimous',
		text: null,
		time: null,				
	},
	
	initialize: function() {
		this.set( 'time', Date.now() );
	}
});