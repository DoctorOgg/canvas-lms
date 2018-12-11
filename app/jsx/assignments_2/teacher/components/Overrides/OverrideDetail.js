/*
 * Copyright (C) 2018 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */
import React from 'react'
import {bool} from 'prop-types'
import OverrideAssignTo from './OverrideAssignTo'
import OverrideAttempts from './OverrideAttempts'
import OverrideSubmissionTypes from './OverrideSubmissionTypes'
import OverrideDates from './OverrideDates'
import {OverrideShape} from '../../assignmentData'
import View from '@instructure/ui-layout/lib/components/View'

export default class OverrideDetail extends React.Component {
  static propTypes = {
    override: OverrideShape.isRequired,
    readOnly: bool
  }

  static defaultProps = {
    readOnly: true
  }

  renderAssignedTo() {
    return <OverrideAssignTo override={this.props.override} variant="detail" />
  }

  renderDates() {
    return (
      <OverrideDates
        dueAt={this.props.override.dueAt}
        unlockAt={this.props.override.unlockAt}
        lockAt={this.props.override.lockAt}
      />
    )
  }

  renderSubmissionTypes() {
    return (
      <View as="div" margin="small 0">
        <OverrideSubmissionTypes
          override={this.props.override}
          variant="detail"
          readOnly={this.props.readOnly}
        />
      </View>
    )
  }

  renderAttempts() {
    return (
      <OverrideAttempts
        variant="detail"
        override={this.props.override}
        readOnly={this.props.readOnly}
      />
    )
  }

  render() {
    return (
      <View as="div" padding="medium" data-testid="OverrideDetail">
        {this.renderAssignedTo()}
        {this.renderDates()}
        {this.renderSubmissionTypes()}
        {this.renderAttempts()}
      </View>
    )
  }
}
