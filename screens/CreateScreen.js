import React from 'react';
import { Platform,ScrollView,Text,View} from 'react-native';
import { Surface,Chip,TextInput,Button,IconButton,Paragraph,HelperText, Portal, Dialog } from 'react-native-paper';
import { Icon } from 'react-native-vector-icons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import PageHeader from "../components/PageHeader";
import CardSummary from "../components/CardSummary";
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import Type from '../constants/Type';
import Space from '../constants/Space';
import Layer from '../constants/Layer';

export default class CreateScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    isDateTimePickerVisible: false,
    dialogVisible: false,
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };

  _showDialog = () => this.setState({ dialogVisible: true });
  _hideDialog = () => this.setState({ dialogVisible: false });


  render() {
    return (
        <View style={{flex:1}}>

            <PageHeader
                pageHeaderTitle="Log Sleep"
                pageHeaderDescription="Add a new entry to your sleep journal. " />

            <ScrollView style={Layout.container} contentContainerStyle={Layout.contentContainer}>

                <View>
                    <Paragraph>Log a new sleep event into your journal.</Paragraph>
                </View>

                <View style={[Layer.stackPush]}>
                    <TextInput
                            id="DateField"
                            label='Date'
                            value="Wed 14th December"
                            mode="outlined"
                            onFocus={this._showDateTimePicker}
                          />
                    <HelperText
                        type="info">
                        Set to Today
                    </HelperText>
                      <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                      />
                </View>

                <View style={[Layer.stackPush, {flex: 1,flexDirection: 'row',justifyContent: 'space-between'}]}>
                       <TextInput
                            style={{flexGrow: 50, marginRight: Space.sizeSmall}}
                            label='Start'
                            value="12:00"
                            mode="outlined"
                         />
                         <TextInput
                            style={{flexGrow: 50}}
                            label='End'
                            value="06:00"
                            mode="outlined"
                                 />
                </View>

                 <View style={Layer.stackPush}>
                     <TextInput
                             label='Wakeups'
                             value="2"
                             mode="outlined"
                           />
                       <HelperText
                           type="info">
                           How many times did you wake up?
                       </HelperText>
                </View>

                <View style={Layer.stackPush}>
                    <TextInput
                            label='Quality'
                            value="Not Great"
                            mode="outlined"
                          />
                      <HelperText
                          type="info">
                          How good do you feel this sleep was?
                      </HelperText>
               </View>

               <View style={Layer.stackPush}>
                   <TextInput
                           label='Pre-bedtime Activity'
                           value="(Other) Put Kids to Bed"
                           mode="outlined"
                           editable = {false}
                           onFocus={this._showDialog}
                         />
                     <HelperText
                         type="info">
                         What did you do before going to bed?
                     </HelperText>

                     
              </View>

              <View style={[Layer.stackPush, Layer.stackLast]}>
                  <Button icon="done" mode="contained" onPress={() => console.log('Pressed')}>
                      Ok, Save
                  </Button>
              </View>

            </ScrollView>
      </View>
    );
  }
}
