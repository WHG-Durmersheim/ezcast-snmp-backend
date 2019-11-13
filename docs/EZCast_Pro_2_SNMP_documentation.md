# EZCast Pro 2 SNMP Documentation
## Introduction
In this Document, you will find what data can be received/changed from/on the EZCast Pro 2 using SNMP. It may only be a parsed Version of the mib, but it is much mor readable and I added a few comments to it that may prove helpful.
## Documentation
### AirSetup (WiFi)
###### WiFi-Password
* Name: SoftApPassWord
* Type: String (8..64)
* Access: r/w
* Description: "WiFi 2.4G and 5G use the same PSK password."

###### Hide SSID
* Name: SoftApHideSSID
* Type: String (8..64)
* Access: r/w
* Description: "0:ssid is open,you can see it ;1:ssid is hidden"
* Comment: Why don't they use a Boolean?

###### Streaming Settings
* Name: EZAir OBJECT-TYPE
* Type: String (8..64)
* Access: r/w
* Description: "0:Mirror+Streaming; 1:Mirror Only."
* Comment: Why don't they use a Boolean?

### Device Management
###### Device Language
* name: Language
* Type: String (0..2)
* Access: r/w
* Description: "0:en; 1:fr; 2:de; 3:es; 4:zh-CN; 5:zh-TW; 6:ja; 7:ko; 8:it; 9:ru; 10:nl; 11:pt; 12:tr; 13:ar; 14:tha; 15:fa; 16:auto"

###### Change SSID
* name: ChangeSSID
* Type: String (8..15)
* Access: r/w
* Description: "The SSID length should be 1~20 characters."

###### Output Resolution
* name: ChangeSSID
* Type: String
* Access: r/w
* Description: "Get/set resolution; HDMI_TAB id: 0:1280x720_50P; 1:1280x720_60P; 2:1920x1080_24P; 3:1920x1080_50P; 4:1920x1080_60P; 5:3840x2160_24P; 6:3840x2160_25P; 7:3840x2160_30P; 8:4096x2160_24P"

###### EDIDTable
* name: EDIDTable
* Type: String (0..1024)
* Access: r/w
* Description: "the system resolution of EDID Table."
* Comment: Don't know what this is.

###### Maximum Simultaneous WiFi Clients
* name: MaxConNum
* Type: String (0..3)
* Access: r/w
* Description: "Maximum number of connections in the system. 0: 4 users; 1: 8 users; 2: 16 users; 3: 32 users; 4: 64 users;"

### Access Control
###### Cast Code Settings
* name: CastCodeControl
* Type: String (0..8)
* Access: r/w
* Description: "CastCodeControl 0:OFF; 1:Random; 2:Fixed, only 4 bit digits are allowed. Set example:(1)0; (2)1; (3)2;6688;"

###### Internet Access Control
* name: InternetAccessControl
* Type: String (0..8)
* Access: r/w
* Description: "InternetAccessControl  0:All allowed;  1:Casting users allowed;  2:All denied."

###### Hide Password
* name: PassowrdHidden
* Type: String
* Access: r/w
* Description: "Get/Set the password status, 0:off 1:on."
* Comment: Why don't they use a Boolean?

###### AirView
* name: PassowrdHidden
* Type: String
* Access: r/w
* Description: "Get/Set the airview, 0:off 1:on.frame_rate:{5000,15000,30000,60000,0}, example:1;5000;"

### Network Setup
###### Router or Direct Connection Only
* name: RouterOrDirectOnly
* Type: String (0..1)
* Access: r/w
* Description: "0:Via Router Allowed; 1:Direct Link Only; 2:Via Router Only"
* Comment: Why don't they use a Boolean?

###### WiFi-Channel Setup
* name: SoftApChannel
* Type: String (0..128)
* Access: r/w
* Description: 
> 5G WiFiChannel.Warning!!,Configure without connect router.Channel Auto, input Auto.BandWidth:20/80.SetExample:5G;America;2;Auto;80;
>         channel5g_regiontbl[]={ 
>         1,South Africa,{36,40,44,48}; 
>         1,Israel,{36,40,44,48}; 
>         1,Turkey,{36,40,44,48};
>         1,Egypt,{36,40,44,48};
>         1,Tunisia,{36,40,44,48};
>         1,Kuwait,{36,40,44,48};
>         1,United Arab Emirates,{36,40,44,48};
>         2,Russia,{36,40,44,48,149,153,157,161};
>         2,Singapore,{36,40,44,48,149,153,157,161};
>         1,South America,{36,40,44,48};
>         1,Saudi Arabia,{36,40,44,48};
>         2,America,{36,40,44,48,149,153,157,161};
>         2,Australia,{36,40,44,48,149,153,157,161};
>         2,Canada,{36,40,44,48,149,153,157,161};
>         2,India,{36,40,44,48,149,153,157,161};
>         2,Korea,{36,40,44,48,149,153,157,161};
>         2,Malaysia,{36,40,44,48,149,153,157,161};
>         2,Mexico,{36,40,44,48,149,153,157,161};
>         2,China,{36,40,44,48,149,153,157,161};
>         3,Iran,{149,153,157,161};
>         3,Labanon,{149,153,157,161};
>         3,Qatar,{149,153,157,161};
>         2,Europe,{36,40,44,48,149,153,157,161};
>         1,Japan,{36,40,44,48};
>         2,Taiwan,{36,40,44,48,149,153,157,161};
> }
* Comment: Is that supposed to be some kind of json?

###### Manual WiFi Settings
* name: WiFiManual
* Type: String (0..128)
* Access: r/w
* Description: "set wifi IP;Gateway;Netmask;DNS; setexample:192.168.48.68;192.168.48.1;255.255.255.0;192.168.48.1;"

###### Manual Lan Settings
* name: LanSet
* Type: String (0..128)
* Access: r/w
* Description: "set lan IP;Gateway;Netmask;DNS;	setexample:192.168.48.68;192.168.48.1;255.255.255.0;192.168.48.1;"

### Add Network
###### Apply new Network Settings
* name: AddNetworkApply
* Type: String (0..1)
* Access: r/w
* Description: "add network parameters format:ssid;authen;psk; set example:action;WPA-PSK;12345678;"

###### Scan for available WiFi Networks
* name: ScanNetwork
* Type: String (0..1)
* Access: r/w
* Description: "Do not need to enter any value ,just press SET key and it will scan network."

###### Get the results of the WiFi Scan
* name: ScanresultNetwork
* Type: String (0..8192)
* Access: r/w
* Description: "get the scan network results. format:SSID;Authen;unknown;networkid;macaddr;"

###### Connect to one of those found networks:
* name: ConnectNetwork
* Type: String (0..128)
* Access: r/w
* Description: "set connect network ssid;authen;psk;mac;networkid;
* set example:action;WPA-PSK;12345678;84:1b:5e:d7:3a:83;-1;"

### Advanced Setup
###### Set a new OTA Url
* name: OTAURL
* Type: String (0..128)
* Access: r/w
* Description: "OTA Server,such as http://www.iezvu.com"

###### Set a new Admin Password
* name: AdminPassword
* Type: String (6..64)
* Access: r/w
* Description: "admin password,Password must be between 6 and 64 characters long. It is md5 encrypted password when you GET it"
* Comment: MD5 is just hashing...

### System Information
###### MAC-Address of wlan0
* Name: Wlan0MacAddress
* Type: String
* Access read-only
* Description: "MAC of wlan0."

###### IP-Address of wlan0
* Name: Wlan0IPAddress
* Type: String
* Access read-only
* Description: "IP of wlan0."

###### Link Status of wlan0
* Name: Wlan0LinkStatus
* Type: String
* Access: read-only
* Description: "The link status of WLAN0 interface."

###### MAC-Address of wlan1
* Name: Wlan1MacAddress
* Type: String
* Access read-only
* Description: "MAC of wlan1."

###### IP-Address of wlan1
* Name: Wlan1IPAddress
* Type: String
* Access read-only
* Description: "IP of wlan1."

###### Link Status of wlan1
* Name: Wlan1LinkStatus
* Type: String
* Access: read-only
* Description: "The link status of WLAN1 interface."

###### MAC-Address of wlan2
* Name: Wlan2MacAddress
* Type: String
* Access read-only
* Description: "MAC of wlan2."

###### IP-Address of wlan2
* Name: Wlan2IPAddress
* Type: String
* Access read-only
* Description: "IP of wlan2."

###### Link Status of wlan2
* Name: Wlan2LinkStatus
* Type: String
* Access: read-only
* Description: "The link status of WLAN2 interface."

###### MAC-Address of wlan3
* Name: Wlan3MacAddress
* Type: String
* Access read-only
* Description: "MAC of wlan3."

###### IP-Address of wlan3
* Name: Wlan3IPAddress
* Type: String
* Access read-only
* Description: "IP of wlan3."

###### Link Status of wlan3
* Name: Wlan3LinkStatus
* Type: String
* Access: read-only
* Description: "The link status of WLAN3 interface."

###### MAC-Address of LAN
* Name: LanMacAddress
* Type: String
* Access read-only
* Description: "MAC of LAN."

###### IP-Address of LAN
* Name: LanIPAddress
* Type: String
* Access read-only
* Description: "IP of LAN."

###### Link Status of LAN
* Name: LanLinkStatus
* Type: String
* Access: read-only
* Description: "The link status of LAN interface."

###### Firmware Version of the Stick
* Name: FWLocalVersion
* Type: String
* Access: read-only
* Description: "Local Software Version."

###### Latest Version on given OTA Server
* Name: FWOTAServerVersion
* Type: String
* Access: read-only
* Description: "OTA Server Version."

###### Number of Logged-In Users
* Name: LoginUserNum
* Type: String
* Access: read-only
* Description: "Current Login user num."
    
###### Internet Connection Status
* Name: LoginUserNum
* Type: String
* Access: read-only
* Description: "Current Internet status."