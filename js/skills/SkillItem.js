/**
 * Login landing page for the Discover application
 * @providesModule SkillItem
 * @flow
 */
'use strict';
import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import ScrollableTabView from 'react-native-scrollable-tab-view'

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

const imageList = {};
imageList['aggressive_reload'] = require('../lib/img/skills/aggressive_reload.png');
imageList['akimbo'] = require('../lib/img/skills/akimbo.png');
imageList['ammo_efficiency'] = require('../lib/img/skills/ammo_efficiency.png');
imageList['ammunition_specialist'] = require('../lib/img/skills/ammunition_specialist.png');
imageList['berserker'] = require('../lib/img/skills/berserker.png');
imageList['black_marketeer'] = require('../lib/img/skills/black_marketeer.png');
imageList['blast_radius'] = require('../lib/img/skills/blast_radius.png');
imageList['bloodthirst'] = require('../lib/img/skills/bloodthirst.png');
imageList['body_expertise'] = require('../lib/img/skills/body_expertise.png');
imageList['brothers_keeper'] = require('../lib/img/skills/brothers_keeper.png');
imageList['bulletproof'] = require('../lib/img/skills/bulletproof.png');
imageList['bullet_storm'] = require('../lib/img/skills/bullet_storm.png');
imageList['bullseye'] = require('../lib/img/skills/bullseye.png');
imageList['cable_guy'] = require('../lib/img/skills/cable_guy.png');
imageList['camera_loop'] = require('../lib/img/skills/camera_loop.png');
imageList['carbon_blade'] = require('../lib/img/skills/carbon_blade.png');
imageList['cat_burglar'] = require('../lib/img/skills/cat_burglar.png');
imageList['chameleon'] = require('../lib/img/skills/chameleon.png');
imageList['cleaner'] = require('../lib/img/skills/cleaner.png');
imageList['close_by'] = require('../lib/img/skills/close_by.png');
imageList['combat_doctor'] = require('../lib/img/skills/combat_doctor.png');
imageList['combat_engineer'] = require('../lib/img/skills/combat_engineer.png');
imageList['combat_engineering'] = require('../lib/img/skills/combat_engineering.png');
imageList['combat_engineer_v3'] = require('../lib/img/skills/combat_engineer_v3.png');
imageList['combat_medic'] = require('../lib/img/skills/combat_medic.png');
imageList['control_freak'] = require('../lib/img/skills/control_freak.png');
imageList['counter_strike'] = require('../lib/img/skills/counter_strike.png');
imageList['daredevil'] = require('../lib/img/skills/daredevil.png');
imageList['dead_presidents'] = require('../lib/img/skills/dead_presidents.png');
imageList['demolition_man'] = require('../lib/img/skills/demolition_man.png');
imageList['demolition_man_v3'] = require('../lib/img/skills/demolition_man_v3.png');
imageList['desperado'] = require('../lib/img/skills/desperado.png');
die-imageList['hard'] = require('../lib/img/skills/hard.png');
imageList['die_hard'] = require('../lib/img/skills/die_hard.png');
imageList['dire_need'] = require('../lib/img/skills/dire_need.png');
imageList['dominator'] = require('../lib/img/skills/dominator.png');
imageList['drill_sergeant'] = require('../lib/img/skills/drill_sergeant.png');
imageList['duck_and_cover'] = require('../lib/img/skills/duck_and_cover.png');
imageList['ecm_feedback'] = require('../lib/img/skills/ecm_feedback.png');
imageList['ecm_overdrive'] = require('../lib/img/skills/ecm_overdrive.png');
imageList['ecm_specialist'] = require('../lib/img/skills/ecm_specialist.png');
imageList['eco_sentry'] = require('../lib/img/skills/eco_sentry.png');
imageList['endurance'] = require('../lib/img/skills/endurance.png');
imageList['engineering'] = require('../lib/img/skills/engineering.png');
imageList['equilibrium'] = require('../lib/img/skills/equilibrium.png');
imageList['far_away'] = require('../lib/img/skills/far_away.png');
imageList['fast_hands'] = require('../lib/img/skills/fast_hands.png');
imageList['fast_learner'] = require('../lib/img/skills/fast_learner.png');
imageList['feign_death'] = require('../lib/img/skills/feign_death.png');
imageList['fire_control'] = require('../lib/img/skills/fire_control.png');
imageList['fire_trap'] = require('../lib/img/skills/fire_trap.png');
imageList['frenzy'] = require('../lib/img/skills/frenzy.png');
imageList['fully_loaded'] = require('../lib/img/skills/fully_loaded.png');
imageList['gunslinger'] = require('../lib/img/skills/gunslinger.png');
imageList['gun_nut'] = require('../lib/img/skills/gun_nut.png');
hardware-imageList['expert'] = require('../lib/img/skills/expert.png');
imageList['hardware_expert'] = require('../lib/img/skills/hardware_expert.png');
imageList['hard_boiled'] = require('../lib/img/skills/hard_boiled.png');
imageList['heavy_impact'] = require('../lib/img/skills/heavy_impact.png');
imageList['hidden_blade'] = require('../lib/img/skills/hidden_blade.png');
imageList['high_value_target'] = require('../lib/img/skills/high_value_target.png');
imageList['hostage_taker'] = require('../lib/img/skills/hostage_taker.png');
imageList['improved_crafting'] = require('../lib/img/skills/improved_crafting.png');
imageList['inner_pockets'] = require('../lib/img/skills/inner_pockets.png');
imageList['inside_man'] = require('../lib/img/skills/inside_man.png');
imageList['inspire'] = require('../lib/img/skills/inspire.png');
imageList['iron_man'] = require('../lib/img/skills/iron_man.png');
jack-of-all-imageList['trades'] = require('../lib/img/skills/trades.png');
imageList['jack_of_all_trades'] = require('../lib/img/skills/jack_of_all_trades.png');
imageList['joker'] = require('../lib/img/skills/joker.png');
imageList['kickstarter'] = require('../lib/img/skills/kickstarter.png');
imageList['kilmer'] = require('../lib/img/skills/kilmer.png');
imageList['leadership'] = require('../lib/img/skills/leadership.png');
imageList['lockpicking_expert'] = require('../lib/img/skills/lockpicking_expert.png');
imageList['lock_n_load'] = require('../lib/img/skills/lock_n_load.png');
imageList['low_blow'] = require('../lib/img/skills/low_blow.png');
imageList['mag_plus'] = require('../lib/img/skills/mag_plus.png');
imageList['marksman'] = require('../lib/img/skills/marksman.png');
martial-imageList['arts'] = require('../lib/img/skills/arts.png');
imageList['martial_arts'] = require('../lib/img/skills/martial_arts.png');
imageList['more_firepower'] = require('../lib/img/skills/more_firepower.png');
imageList['moving_target'] = require('../lib/img/skills/moving_target.png');
imageList['nerves_of_steel'] = require('../lib/img/skills/nerves_of_steel.png');
imageList['nimble'] = require('../lib/img/skills/nimble.png');
imageList['nine_lives'] = require('../lib/img/skills/nine_lives.png');
imageList['not_implemented'] = require('../lib/img/skills/not_implemented.png');
imageList['one_handed_talent'] = require('../lib/img/skills/one_handed_talent.png');
imageList['oppressor'] = require('../lib/img/skills/oppressor.png');
imageList['optical_illusions'] = require('../lib/img/skills/optical_illusions.png');
imageList['overkill'] = require('../lib/img/skills/overkill.png');
imageList['painkillers'] = require('../lib/img/skills/painkillers.png');
imageList['parkour'] = require('../lib/img/skills/parkour.png');
imageList['partner_in_crime'] = require('../lib/img/skills/partner_in_crime.png');
imageList['pistol_messiah'] = require('../lib/img/skills/pistol_messiah.png');
imageList['portable_saw'] = require('../lib/img/skills/portable_saw.png');
imageList['pumping_iron'] = require('../lib/img/skills/pumping_iron.png');
imageList['question'] = require('../lib/img/skills/question.png');
imageList['quick_fix'] = require('../lib/img/skills/quick_fix.png');
imageList['rifleman'] = require('../lib/img/skills/rifleman.png');
imageList['running_from_death'] = require('../lib/img/skills/running_from_death.png');
imageList['run_and_gun'] = require('../lib/img/skills/run_and_gun.png');
imageList['scavenger'] = require('../lib/img/skills/scavenger.png');
imageList['scoop'] = require('../lib/img/skills/scoop.png');
imageList['second_wind'] = require('../lib/img/skills/second_wind.png');
sentry-targeting-imageList['package'] = require('../lib/img/skills/package.png');
imageList['sentry_combat_upgrade'] = require('../lib/img/skills/sentry_combat_upgrade.png');
imageList['sentry_gun'] = require('../lib/img/skills/sentry_gun.png');
imageList['sentry_targeting_package'] = require('../lib/img/skills/sentry_targeting_package.png');
imageList['sentry_tower_defense'] = require('../lib/img/skills/sentry_tower_defense.png');
imageList['shaped_charge'] = require('../lib/img/skills/shaped_charge.png');
imageList['shaped_charge_v3'] = require('../lib/img/skills/shaped_charge_v3.png');
imageList['sharpshooter'] = require('../lib/img/skills/sharpshooter.png');
imageList['shinobi'] = require('../lib/img/skills/shinobi.png');
imageList['shockproof'] = require('../lib/img/skills/shockproof.png');
imageList['shock_and_awe'] = require('../lib/img/skills/shock_and_awe.png');
shotgun-imageList['cqb'] = require('../lib/img/skills/cqb.png');
shotgun-imageList['impact'] = require('../lib/img/skills/impact.png');
imageList['shotgun_cqb'] = require('../lib/img/skills/shotgun_cqb.png');
imageList['shotgun_impact'] = require('../lib/img/skills/shotgun_impact.png');
imageList['silent_drilling'] = require('../lib/img/skills/silent_drilling.png');
imageList['silent_killer'] = require('../lib/img/skills/silent_killer.png');
imageList['sixth_sense'] = require('../lib/img/skills/sixth_sense.png');
imageList['smg_specialist'] = require('../lib/img/skills/smg_specialist.png');
imageList['sneaky_bastard'] = require('../lib/img/skills/sneaky_bastard.png');
imageList['spotter'] = require('../lib/img/skills/spotter.png');
imageList['sprinter'] = require('../lib/img/skills/sprinter.png');
imageList['steady_grip'] = require('../lib/img/skills/steady_grip.png');
imageList['stockholm_syndrome'] = require('../lib/img/skills/stockholm_syndrome.png');
imageList['stun_resistance'] = require('../lib/img/skills/stun_resistance.png');
imageList['surefire'] = require('../lib/img/skills/surefire.png');
imageList['swan_song'] = require('../lib/img/skills/swan_song.png');
imageList['tactical_mines_v3'] = require('../lib/img/skills/tactical_mines_v3.png');
imageList['the_professional'] = require('../lib/img/skills/the_professional.png');
imageList['thick_skin'] = require('../lib/img/skills/thick_skin.png');
imageList['third_law'] = require('../lib/img/skills/third_law.png');
imageList['tough_guy'] = require('../lib/img/skills/tough_guy.png');
imageList['tower_defense'] = require('../lib/img/skills/tower_defense.png');
imageList['transporter'] = require('../lib/img/skills/transporter.png');
imageList['trigger_happy'] = require('../lib/img/skills/trigger_happy.png');
imageList['underdog'] = require('../lib/img/skills/underdog.png');
imageList['undertaker'] = require('../lib/img/skills/undertaker.png');
imageList['unlocking_the_enforcer'] = require('../lib/img/skills/unlocking_the_enforcer.png');
imageList['unlocking_the_fugitive'] = require('../lib/img/skills/unlocking_the_fugitive.png');
imageList['unlocking_the_ghost'] = require('../lib/img/skills/unlocking_the_ghost.png');
imageList['unlocking_the_mastermind'] = require('../lib/img/skills/unlocking_the_mastermind.png');
imageList['unlocking_the_technician'] = require('../lib/img/skills/unlocking_the_technician.png');
imageList['unlocking_the_technician_v3'] = require('../lib/img/skills/unlocking_the_technician_v3.png');
imageList['unseen_strike'] = require('../lib/img/skills/unseen_strike.png');
imageList['uppers'] = require('../lib/img/skills/uppers.png');
imageList['up_you_go'] = require('../lib/img/skills/up_you_go.png');


class SkillItem extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
  }

  render() {
    if (this.props.data) {
      console.log('Name:', this.props.data.name)
      return (
        <TouchableOpacity onPress={this.props.onPress} onLongPress={this.props.onLongPress}>
        <Text>{this.props.data.name}</Text>
        <Image source={imageList[this.props.data.name]} />
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity onPress={this.props.onPress} onLongPress={this.props.onLongPress}>
      <Image source={require('../lib/img/skills/akimbo.png')} />
      </TouchableOpacity>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SkillItem);
