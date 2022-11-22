function Mobile(name, battery, status) {

    this.name = name;
    this.battery = battery;
    this.draftingMessage = [];
    this.toMessage = [];
    this.saveMessage = [];
    this.status = status;

    this.setbattery = function(battery) {
        this.battery = battery;
    }

    this.getbattery = function() {
        return this.battery;
    }

    this.getCheckMobileStatus = function() {
        return this.status;
    }

    this.setTurnOnOff = function(status) {
        if (this.status === 'Off') {
            this.status = 'On';
        } else this.status = status;
        return this.status;
    }

    this.RechargeBattery = function() {
        if (this.battery < 20) {
            //Hiển thị thông báo
            alert('Sạc pin');
            for (let i = this.battery; i < 100; i++) {
                // setTimeout(() => {
                //     this.battery += 1;
                // }, '1000');
                this.battery += 1;
            }

        }
        if (this.battery === 100) {
            alert('Pin đã đầy');
            this.setbattery(this.battery);
        }
        console.log(this.battery)
    }

    this.getWriteMessage = function() {
        let content = prompt('Nhập tin nhắn bạn muốn gửi:');
        this.draftingMessage.push(content);
        return content;
    }

    this.ReceiveMessage = function(mess) {
        this.mess = mess;
        this.saveMessage.push(mess);
    }

    this.sendMessage = function(mess, mobile) {
        this.battery--;
        mobile.ReceiveMessage(mess);
        this.saveMessage.push(mess);
    }
};

let samsung = new Mobile('Samsung', 80, 'On');
let iphone = new Mobile('Iphone', 18, 'Off');

iphone.sendMessage(iphone.getWriteMessage(),samsung);
iphone.RechargeBattery(iphone.battery);
iphone.getbattery();
