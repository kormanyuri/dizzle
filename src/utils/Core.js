/**
 * Created by korman on 15.01.18.
 */

export default class Core
{
    /**
     * hidden alert
     */
    hiddenAlert(component) {

        if (component.state.alert.open) {
            setTimeout(() => {

                component.setState({
                    alert: {
                        open: false
                    }
                });

            }, 3000);
        }

    }
}