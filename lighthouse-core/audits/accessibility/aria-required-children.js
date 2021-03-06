/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/**
 * @fileoverview Ensures elements with an ARIA role contain any required children.
 * e.g. A parent node with role="list" should contain children with role="listitem".
 * See base class in axe-audit.js for audit() implementation.
 */

const AxeAudit = require('./axe-audit');

class AriaRequiredChildren extends AxeAudit {
  /**
   * @return {!AuditMeta}
   */
  static get meta() {
    return {
      category: 'Accessibility',
      name: 'aria-required-children',
      description: 'Elements with `[role]` that require specific children `[role]`s, are present.',
      failureDescription: 'Elements with `[role]` that require specific children `[role]`s, ' +
          'are missing.',
      helpText: 'Some ARIA parent roles must contain specific child roles to perform ' +
          'their intended accessibility functions. ' +
          '[Learn more](https://dequeuniversity.com/rules/axe/2.2/aria-required-children).',
      requiredArtifacts: ['Accessibility']
    };
  }
}

module.exports = AriaRequiredChildren;
