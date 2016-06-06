Chat.Views.MessageForm = Backbone.View.extend({
	template: _.template( $('#tpl-new-contact').html() ),
	
	events: {
		'submit form': 'onFormSubmit',
	},
	
	render: function() {
		var html = this.template(_.extend(this.model.toJSON(), {
			isNew: this.model.isNew()
		}));
		this.$el.append(html);
		return this;
	},
	
	onFormSubmit: function(event) {
		event.preventDefault();
		
		if (this.$('[name=message]').val().trim() == '') {
			this.$('[name=message]').val('');
			this.$('[name=message]').val('').focus();
			return false;
		}
		
		var data = {
			name: this.$('[name=name]').val(),
			text: this.$('[name=message]').val(),
		};		
		if (!data.name.trim()) delete data.name;
		
		this.trigger('form:submitted', data);
		
		this.$('[name=message]').val('').focus();
	},
	
});