import Ember from 'ember';
import FocusForKeypress from 'client/mixins/focus-for-keypress';

export default Ember.Component.extend( FocusForKeypress, {
	action: 'submitAction',
	keyDown: function (e) {
        if (e.keyCode === 13) {
            this.sendAction('action', this.get('status'));
        }
    },
	actions: {
		pickState: function (state) {
			this.status.set('state', state);
		}
	},
	removeOutline: function() {
        this.$().css('outline-style', 'none');
    }.on('didInsertElement')
});
